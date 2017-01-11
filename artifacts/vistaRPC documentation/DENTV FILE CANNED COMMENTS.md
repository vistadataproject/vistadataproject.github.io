---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV FILE CANNED COMMENTS 

 property | value 
--- | --- 
 label | DENTV FILE CANNED COMMENTS
 tag | FILE
 routine | [DENTVCC](http://code.osehra.org/dox/Routine_DENTVCC_source.html)
 return value type | SINGLE VALUE
 description | This rpc will file/update canned statements.The array must contain the following:      DENTV(\PROV\) - Provider IEN      DENTV(\TYP\) - 1: system, 2: user/provider      DENTV(\CAT\) - 1: radio, 2: summary, 3: treatment, 4: educ, 5: disp      DENTV(n) - n number of records for the WP field (the comment)      DENTV(\IEN\) - Only Send this only if a record is being updated, a                     null IEN means add.       There is no sort stored in this call. The record is automatically added to the bottom. You must use DENTV UPDATE COMMENT SORT to update sorting.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DENTV | LIST | 255 | true | This is the comment information that must be entered to save/update the record.     DENTV(\PROV\) - Provider IEN     DENTV(\TYP\) - 1: system, 2: user     DENTV(\CAT\) - 1:radio,2:summary,3:treatment,4:educ,5:disp     DENTV(n) - n number of records for the WP field (the comment)     DENTV(\IEN\) - IEN is only used to updated an existing, null means                     add. | 




 ###### Generated on January 11th 2017, 6:39:43 am