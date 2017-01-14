---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWPCE ASKPCE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE ASKPCE{:/}
 tag | {::nomarkdown}ASKPCE{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the value of the ORWPCE ASK ENCOUNTER UPDATE parameter.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The user to get the parameter for.{:/} | 
| {::nomarkdown}LOC{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The Location to use when getting the parameter.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ASKPCE^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | Returns ORWPCE ASK ENCOUNTER UPDATE parameter value
 Input parameters | {::nomarkdown}USER<br/>LOC{:/}
 Code | ```  N SRV,ORTMP,ORERR
 S USER=$G(USER,DUZ)
 S SRV=$P($G(^VA(200,USER,5)),U)
 D GETLST^XPAR(.ORTMP,"USR^LOC.`"_$G(LOC)_"^SRV.`"_+$G(SRV)_"^DIV^SYS^PKG","ORWPCE ASK ENCOUNTER UPDATE","Q",.ORERR)
 S ORY=+$P($G(ORTMP(1)),U,2)```




 Generated on January 14th 2017, 7:26:35 am