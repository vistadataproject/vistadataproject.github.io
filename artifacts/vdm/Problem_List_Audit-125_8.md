---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Problem_List_Audit-125_8 

 property | value 
--- | --- 
 id | Problem_List_Audit-125_8
 fmId | 125.8
 label | Problem List Audit
 location | ^GMPL(125.8,
 description | {::nomarkdown}This file holds an audit trail of all changes made to the Problem<br/>List entries including the old and new values, who made the change,<br/>and why.  Each entry here represents a single change to one problem.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| problem | .01 | Problem | {::nomarkdown}This is the problem for which a change is being recorded.{:/} | POINTER |  | REQUIRED, INDEXED | [Problem-9000011](Problem-9000011.md) | 
| field_number | 1 | Field Number | {::nomarkdown}This is the number of the field for which a change is being recorded.{:/} | NUMERIC |  | REQUIRED |  | 
| date_time_modified | 2 | Date/time Modified | {::nomarkdown}This is the date and time that this data was changed.{:/} | DATE-TIME |  | REQUIRED |  | 
| who_modified | 3 | Who Modified | {::nomarkdown}This is the user who actually made the change to this data; the current<br/>user's DUZ is stuffed in here.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| old_value | 4 | Old Value | {::nomarkdown}This is the original value as stored in the Problem file global<br/>(internal format).{:/} | STRING |  |  |  | 
| new_value | 5 | New Value | {::nomarkdown}This is the new value now stored in the Problem file global (internal<br/>format).{:/} | STRING |  |  |  | 
| reason_for_change | 6 | Reason For Change | {::nomarkdown}This is the description of why the change was made, if known.{:/} | STRING |  |  |  | 
| requesting_provider | 7 | Requesting Provider | {::nomarkdown}This is the provider who either changed this data, or directed it to be<br/>changed.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| old_problem_entry | 10 | Old Problem Entry | {::nomarkdown}This is the entire problem entry (internal format) as it existed prior<br/>to changing this data.{:/} | STRING |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:30:43 am</p>{:/}