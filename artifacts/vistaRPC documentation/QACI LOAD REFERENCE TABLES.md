---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; QACI LOAD REFERENCE TABLES 

 property | value 
--- | --- 
 label | {::nomarkdown}QACI LOAD REFERENCE TABLES{:/}
 tag | {::nomarkdown}EN{:/}
 routine | [QACI3](http://code.osehra.org/dox/Routine_QACI3_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC assumes that the user has previously run the option QACI MIGRATION DATA BUILD to build the lists of reference table data for allentries referenced by at least one CONSUMER CONTACT record. You must set up separate code to load each table, because the FLAG parameter will be different for each table. The order in which the tables are updated is not important. Each table update can call the RPC multipletimes in a loop. When all of the data for a single table has beenprocessed, the output array is returned empty. Exit the loop for that table and go on to process the next table. The first time the RPC is called (based on an input parameter) two checks are done. If there is no data to migrate in any of the tables, the RPCreturns 0 in the 0th entry of the array. If the 'ready to migrate' flaghas not been set, the RPC returns 1 in the 0th entry of the array indicating that the user has not yet flagged the data ready for migration. So you would do the following in the Java calling code:1) Set the flag to indicate the table you wish to update, then call theRPC using VistALink. On the first call, the input array will be empty, and the input parameter indicating whether this is the first call should be set to 1.2) Check to make sure the 0 entry of the array is not set to 1 or 0. Ifit is, generate an appropriate message and quit.3) Check the output list from the RPC. If empty, return to step 1 toprocess the next table.4) Otherwise, pass the list returned by the RPC to the appropriate Oracleprocedure to update the current table.5) Move the output from the Oracle procedure into the array that will be used as input to the next RPC call, then return to step 1, stillprocessing the same table. Each entry in the output list from this RPC contains up-arrow delimitedstrings of reference table data, each one containing all the data toupdate a single entry on the Oracle table indicated by the flag parameter.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATSNO{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Number of entries to be returned in one call to the RPC. If set to 0 or null, the RPC returns all entries for the current reference table.{:/} | 
| {::nomarkdown}PATSLIST{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}If defined, contains a list of VistA_IEN^Ids entries for the previous group of entries that was migrated from VistA to the Oracle table. Information indicating which table the data belongs to is included as part of the list itself.{:/} | 
| {::nomarkdown}PATSFLAG{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Must be set to the following, to indicate what type of data is to be returned in the output list.H = hospital_location entries (HOSPITAL LOCATION #44)P = pats_patient entries (PATIENT file #2)U = pats_user entries (NEW PERSON file #200)C = congressional_contact (CONGRESSIONAL OFFICE file #745.4)E = employee_involved (NEW PERSON file #200)F = facility_service_or_section (QAC SERVICE/DISCIPLINE file 745.55){:/} | 
| {::nomarkdown}PATSFRST{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This boolean value indicates whether this RPC is being called the first time, or subsequent times. On the first call, the parameter should be set to 1. On subsequent calls, it should be set to 0. This controls additional checks in the routine that will tell the calling routine if there is no data to migrate, or if the user flag that allows the migration to be done has been set to allow migration at this time.{:/} | 




 Generated on January 13th 2017, 5:52:13 am