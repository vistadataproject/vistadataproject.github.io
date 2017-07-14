---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; QACI LOAD REFERENCE TABLES<br/>
# QACI LOAD REFERENCE TABLES

This RPC assumes that the user has previously run the option QACI MIGRATION DATA BUILD to build the lists of reference table data for allentries referenced by at least one CONSUMER CONTACT record. You must set up separate code to load each table, because the FLAG parameter will be different for each table. The order in which the tables are updated is not important. Each table update can call the RPC multipletimes in a loop. When all of the data for a single table has beenprocessed, the output array is returned empty. Exit the loop for that table and go on to process the next table. The first time the RPC is called (based on an input parameter) two checks are done. If there is no data to migrate in any of the tables, the RPCreturns 0 in the 0th entry of the array. If the 'ready to migrate' flaghas not been set, the RPC returns 1 in the 0th entry of the array indicating that the user has not yet flagged the data ready for migration. So you would do the following in the Java calling code:1) Set the flag to indicate the table you wish to update, then call theRPC using VistALink. On the first call, the input array will be empty, and the input parameter indicating whether this is the first call should be set to 1.2) Check to make sure the 0 entry of the array is not set to 1 or 0. Ifit is, generate an appropriate message and quit.3) Check the output list from the RPC. If empty, return to step 1 toprocess the next table.4) Otherwise, pass the list returned by the RPC to the appropriate Oracleprocedure to update the current table.5) Move the output from the Oracle procedure into the array that will be used as input to the next RPC call, then return to step 1, stillprocessing the same table. Each entry in the output list from this RPC contains up-arrow delimitedstrings of reference table data, each one containing all the data toupdate a single entry on the Oracle table indicated by the flag parameter.

## Properties

Property | Value
--- | ---
Label | EN
Routine | [QACI3](http://code.osehra.org/dox/Routine_QACI3_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATSNO | LITERAL | 10 | true | Number of entries to be returned in one call to the RPC. If set to 0 or null, the RPC returns all entries for the current reference table.
PATSLIST | LIST |  | true | If defined, contains a list of VistA_IEN^Ids entries for the previous group of entries that was migrated from VistA to the Oracle table. Information indicating which table the data belongs to is included as part of the list itself.
PATSFLAG | LITERAL | 3 | true | Must be set to the following, to indicate what type of data is to be returned in the output list.H &#x3D; hospital_location entries (HOSPITAL LOCATION #44)P &#x3D; pats_patient entries (PATIENT file #2)U &#x3D; pats_user entries (NEW PERSON file #200)C &#x3D; congressional_contact (CONGRESSIONAL OFFICE file #745.4)E &#x3D; employee_involved (NEW PERSON file #200)F &#x3D; facility_service_or_section (QAC SERVICE/DISCIPLINE file 745.55)
PATSFRST | LITERAL | 1 | true | This boolean value indicates whether this RPC is being called the first time, or subsequent times. On the first call, the parameter should be set to 1. On subsequent calls, it should be set to 0. This controls additional checks in the routine that will tell the calling routine if there is no data to migrate, or if the user flag that allows the migration to be done has been set to allow migration at this time.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}