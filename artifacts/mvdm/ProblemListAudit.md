
##[MVDM](TableOfContent.md) --> ProblemListAudit 

 property | value 
--- | --- 
 id | ProblemListAudit
 label | Problem List Audit
 description | Contains problem list audits
 fmIdForId | 125.8
 baseVDMClass | [Problem_List_Audit-125_8](../VDM/Problem_List_Audit-125_8.md)
 fromVDMQueries | [{vdmId:Problem_List_Audit-125_8,query:DESCRIBE $ID}]
 fromVDMList | SELECT 125_8
 fromVDMListPerPatient | 

###Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| problem | Problem | POINTER | problem |  |  | INDEXED | 
| fieldNumber | Field Number | NUMERIC | field_number |  |  |  | 
| modifiedDate | Modified Date | DATE-TIME | date_time_modified | $NOW |  |  | 
| whoModified | Who Modified | POINTER | who_modified | $USERID |  |  | 
| oldValue | Old Value | STRING | old_value |  |  |  | 
| newValue | New Value | STRING | new_value |  |  |  | 
| reason | Reason for Change | STRING | reason_for_change |  |  |  | 
| requestingProvider | Requesting Provider | POINTER | requesting_provider | $USERID |  |  | 
| oldProblemEntry | Old Problem Entry | STRING | old_problem_entry |  |  |  | 