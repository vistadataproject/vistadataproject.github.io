---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU UPDATE ADDITIONAL SIGNERS 

 property | value 
--- | --- 
 label | TIU UPDATE ADDITIONAL SIGNERS
 tag | IDSIGNRS
 routine | [TIULX](http://code.osehra.org/dox/Routine_TIULX_source.html)
 return value type | SINGLE VALUE
 description | This RPC accepts a list of persons, and adds them as additional signersfor the document identified by the first parameter.


### Method description

 property | value 
--- | --- 
 Method comment | Add list of Add'l Signers for a TIU Document
 Leading comment lines | TIULIST(TIUI) [By Ref] = array of users to add/remove as signers,TIUDA                  = IEN in ^TIU(8925,

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUDA | LITERAL |  | true | This is the record # (ien) of the document in file 8925. | 
| TIULIST | LIST |  | true | This is the list of users, passed by reference, as shown below:        TIULIST(1)=213[^CASEY,BEN]       TIULIST(2)=73425[^HOWSER,DOOGEY]       TIULIST(3)=172[^WELBY,MARCUS] NOTE that names passed as second '^'-pieces are optional. | 




 ###### Generated on January 11th 2017, 6:39:42 am