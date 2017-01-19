---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XUS PKI SET UPN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XUS PKI SET UPN{:/}
 tag | {::nomarkdown}SETUPN{:/}
 routine | [XUSER2](http://code.osehra.org/dox/Routine_XUSER2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC is used to set the SUBJECT ALTERNATIVE NAME in the New Person #(200) file field 501.2. {:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}UPN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the SUBJECT ALTERNATIVE NAME from the PIV card.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | SETUPN^[XUSER2](http://code.osehra.org/dox/Routine_XUSER2_source.html)
 Method comment | Set the SUBJECT ALTERNATIVE NAME from the PIV card. -p580
 Input parameters | {::nomarkdown}V{:/}
 Code | {::nomarkdown}  N FDA,ERR<br> S RET=0,FDA(200,DUZ_",",501.2)=V<br> D FILE^DIE("KE","FDA","ERR") I '$D(ERR) S RET=1{:/}


### CPRS

[Orders/uOrders.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/uOrders.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}