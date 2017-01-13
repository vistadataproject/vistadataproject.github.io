---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU UPDATE ADDITIONAL SIGNERS 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU UPDATE ADDITIONAL SIGNERS{:/}
 tag | {::nomarkdown}IDSIGNRS{:/}
 routine | [TIULX](http://code.osehra.org/dox/Routine_TIULX_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC accepts a list of persons, and adds them as additional signersfor the document identified by the first parameter.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Add list of Add'l Signers for a TIU Document
 Leading comment lines | {::nomarkdown}TIULIST(TIUI) [By Ref] = array of users to add/remove as signers<br/>TIUDA                  = IEN in ^TIU(8925,{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the record # (ien) of the document in file 8925.{:/} | 
| {::nomarkdown}TIULIST{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the list of users, passed by reference, as shown below:        TIULIST(1)=213[^CASEY,BEN]       TIULIST(2)=73425[^HOWSER,DOOGEY]       TIULIST(3)=172[^WELBY,MARCUS] NOTE that names passed as second '^'-pieces are optional.{:/} | 




 Generated on January 13th 2017, 6:44:47 am