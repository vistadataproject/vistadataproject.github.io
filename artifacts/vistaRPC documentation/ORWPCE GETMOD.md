---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE GETMOD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE GETMOD{:/}
 tag | {::nomarkdown}GETMOD{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns information for a specific CPT Code.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MODIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}CPT MODIFIER IEN{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETMOD^[ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 Method comment | Returns info for a specific CPT Modifier
 Input parameters | {::nomarkdown}ORMODIEN<br>ORDATE{:/}
 Code | {::nomarkdown}  N ORDATA<br> S:'+$G(ORDATE) ORDATE=DT<br> S ORDATA=$$MOD^ICPTMOD(ORMODIEN,"I",ORDATE,1)<br> I +ORDATA>0 S MODINFO=ORMODIEN_U_$P(ORDATA,U,3)_U_$P(ORDATA,U,2){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [Encounter/rPCE.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}