---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR DELETE REQUESTOR 

 property | value 
--- | --- 
 label | DSIR DELETE REQUESTOR
 tag | DUPRQTR
 routine | [DSIROI1](http://code.osehra.org/dox/Routine_DSIROI1_source.html)
 return value type | SINGLE VALUE
 description | This RPC is used to delete orphan requestors or repoint and delete duplicate requestors. If the first parameter only is passed the routine will check to see that the requestor is in fact not used then it will delete the requestor from file 19620.12. If both the first and second parameters are passed the routine will check to see that both are valid requestors and then will repoint all entries that point to the requestor in parameter 1 to the requestor specified in parameter 2. Input Parameters:        1. Duplicate/Delete Requestor - IEN to file 19620.12 (Required)        2. Repoint to Requestor - IEN to file 19620.12 (Optional) Return Values:        -1^Missing Requestor IEN!        -2^Must Repoint Requestors in Use!        -3^Invalid Requestor #1        -4^Invalid Requestor #2        IEN passed in parameter 1 - Orphan Deleted        IEN passed in parameter 2 - Duplicate repointed and deleted

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DUPLICATE/ORPHAN | LITERAL | 99 | true | This is the pointer to file 19620.12 of the entry to replace/delete. | 
| REPOINT TO | LITERAL | 99 | true | When this parameter is passed it will become the new requestor in place of the pointer passed in parameter 1. | 




 Generated on January 11th 2017, 7:15:04 am