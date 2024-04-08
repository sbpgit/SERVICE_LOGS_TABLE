
module.exports = (srv) => {
    srv.on("loadJobData", async (req) => {
        let lsResults = {};
        let liResults = {};
        let finalResults = [];
        var responseMessage1;
        var Flag = req.data.Flag;
        lsResults = JSON.parse(req.data.LOADJOBDATA);
        if(lsResults[0].JOBID){
        if (Flag === "X") {
            for (var i = 0; i < lsResults.length; i++) {
                liResults.JOB_ID = lsResults[i].JOBID;
                liResults.JOB_NAME = lsResults[i].JOBNAME;
                liResults.JOB_TIME_STAMP = lsResults[i].TIMESTAMP;
                liResults.COMMENT = lsResults[i].COMMENT;
                liResults.MESSAGE_TYPE = lsResults[i].MESSAGETYPE;
                
                finalResults.push(liResults)
                liResults = {};
            }
            try {
                await cds.run(INSERT.into("JS_JOB_LOGS_DETAILS").entries(finalResults));
                responseMessage1 = "Entry Successfull";

            } catch (e) {
                responseMessage1 = "Entry Failed";
            }
        }
        else if(Flag === "D"){
            for (var j = 0; j < lsResults.length; j++) {
                liResults.JOB_ID = lsResults[i].JOBID;
                liResults.JOB_NAME = lsResults[i].JOBNAME;
                finalResults.push(liResults);
                try {
                    await cds.delete("JS_JOB_LOGS_DETAILS", liResults);
                    responseMessage1 = "Deletion successfull";
                } catch (e) {
                    responseMessage1 = "Deletion Failed";
                    break;
                }
                finalResults = [];
            }
        }
    }
    })
}