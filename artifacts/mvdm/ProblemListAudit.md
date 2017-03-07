---
layout: default
title: MVDM documentation
---

## [MVDM](TableOfContent.md) &#8594; ProblemListAudit 

<dl>
<dt>id</dt><dd>ProblemListAudit</dd>
<dt>label</dt><dd>Problem List Audit</dd>
<dt>description</dt><dd>Contains problem list audits</dd>
<dt>fmIdForId</dt><dd>125.8</dd>
<dt>baseVDMClass</dt><dd>[Problem_List_Audit-125_8](../vdm/Problem_List_Audit-125_8)</dd>
<dt>fromVDMQueries</dt><dd>[{vdmId:Problem_List_Audit-125_8,query:DESCRIBE $ID}]</dd>
<dt>fromVDMList</dt><dd>SELECT 125_8</dd>
</dl>
Total # of Subobjects: 0

Total # of Properties: 9
 

 Property Type | Numeric 
 --- | --- 
DATE-TIME | 1
NUMERIC | 1
POINTER | 3
STRING | 4



### Properties

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

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on March 7th 2017, 7:56:16 am</p>{:/}