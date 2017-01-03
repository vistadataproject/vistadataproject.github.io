
## [VDM](TableOfContent.md) --> Problem_List_Audit-125_8 

 property | value 
--- | --- 
 id | Problem_List_Audit-125_8
 fmId | 125.8
 label | Problem List Audit
 location | ^GMPL(125.8,
 description | This file holds an audit trail of all changes made to the Problem\rList entries including the old and new values, who made the change,\rand why.  Each entry here represents a single change to one problem.

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| problem | .01 | Problem | This is the problem for which a change is being recorded. | POINTER |  | REQUIRED, INDEXED | [Problem-9000011](Problem-9000011.md) | 
| field_number | 1 | Field Number | This is the number of the field for which a change is being recorded. | NUMERIC |  | REQUIRED |  | 
| date_time_modified | 2 | Date/time Modified | This is the date and time that this data was changed. | DATE-TIME |  | REQUIRED |  | 
| who_modified | 3 | Who Modified | This is the user who actually made the change to this data; the current\ruser's DUZ is stuffed in here. | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| old_value | 4 | Old Value | This is the original value as stored in the Problem file global\r(internal format). | STRING |  |  |  | 
| new_value | 5 | New Value | This is the new value now stored in the Problem file global (internal\rformat). | STRING |  |  |  | 
| reason_for_change | 6 | Reason For Change | This is the description of why the change was made, if known. | STRING |  |  |  | 
| requesting_provider | 7 | Requesting Provider | This is the provider who either changed this data, or directed it to be\rchanged. | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| old_problem_entry | 10 | Old Problem Entry | This is the entire problem entry (internal format) as it existed prior\rto changing this data. | STRING |  |  |  | 