---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWPCE ALWAYS CHECKOUT 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE ALWAYS CHECKOUT{:/}
 tag | {::nomarkdown}DOCHKOUT{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns TRUE if encounters should be automatically checked out.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LOC{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Location{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DOCHKOUT^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | Returns TRUE if automatic selection of Visit Type
 Input parameters | {::nomarkdown}LOC{:/}
 Code | ```  N SRV<br/> S SRV=$P($G(^VA(200,DUZ,5)),U)<br/> S ORY=$$GET^XPAR(DUZ_";VA(200,^LOC.`"_$G(LOC)_"^SRV.`"_+$G(SRV)_"^DIV^SYS","ORWPCE DISABLE AUTO CHECKOUT",1,"Q")<br/> I +ORY S ORY=1<br/> S ORY='ORY```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}