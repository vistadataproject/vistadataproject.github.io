---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV FILE CANNED COMMENTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTV FILE CANNED COMMENTS{:/}
 tag | {::nomarkdown}FILE{:/}
 routine | [DENTVCC](http://code.osehra.org/dox/Routine_DENTVCC_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This rpc will file/update canned statements.The array must contain the following:      DENTV(\PROV\) - Provider IEN      DENTV(\TYP\) - 1: system, 2: user/provider      DENTV(\CAT\) - 1: radio, 2: summary, 3: treatment, 4: educ, 5: disp      DENTV(n) - n number of records for the WP field (the comment)      DENTV(\IEN\) - Only Send this only if a record is being updated, a                     null IEN means add.       There is no sort stored in this call. The record is automatically added to the bottom. You must use DENTV UPDATE COMMENT SORT to update sorting.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DENTV{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the comment information that must be entered to save/update the record.     DENTV(\PROV\) - Provider IEN     DENTV(\TYP\) - 1: system, 2: user     DENTV(\CAT\) - 1:radio,2:summary,3:treatment,4:educ,5:disp     DENTV(n) - n number of records for the WP field (the comment)     DENTV(\IEN\) - IEN is only used to updated an existing, null means                     add.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}