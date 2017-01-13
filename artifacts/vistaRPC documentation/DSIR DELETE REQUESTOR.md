---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR DELETE REQUESTOR 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIR DELETE REQUESTOR{:/}
 tag | {::nomarkdown}DUPRQTR{:/}
 routine | [DSIROI1](http://code.osehra.org/dox/Routine_DSIROI1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC is used to delete orphan requestors or repoint and delete duplicate requestors. If the first parameter only is passed the routine will check to see that the requestor is in fact not used then it will delete the requestor from file 19620.12. If both the first and second parameters are passed the routine will check to see that both are valid requestors and then will repoint all entries that point to the requestor in parameter 1 to the requestor specified in parameter 2. Input Parameters:        1. Duplicate/Delete Requestor - IEN to file 19620.12 (Required)        2. Repoint to Requestor - IEN to file 19620.12 (Optional) Return Values:        -1^Missing Requestor IEN!        -2^Must Repoint Requestors in Use!        -3^Invalid Requestor #1        -4^Invalid Requestor #2        IEN passed in parameter 1 - Orphan Deleted        IEN passed in parameter 2 - Duplicate repointed and deleted{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DUPLICATE/ORPHAN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to file 19620.12 of the entry to replace/delete.{:/} | 
| {::nomarkdown}REPOINT TO{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}When this parameter is passed it will become the new requestor in place of the pointer passed in parameter 1.{:/} | 




 Generated on January 13th 2017, 5:52:13 am