---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE FORCE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE FORCE{:/}
 tag | {::nomarkdown}FORCE{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the value of the ORWPCE FORCE GUI PCE ENTRY parameter.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Retrieve FORCE GUI PCE Entry for a given User/Location
 Input Parameters | {::nomarkdown}USER<br/>LOC{:/}
 Lines | ```
 N SRV,ORTMP,ORERR
 S USER=$G(USER,DUZ)
 S SRV=$P($G(^VA(200,USER,5)),U)
 D GETLST^XPAR(.ORTMP,"USR^LOC.`"_$G(LOC)_"^SRV.`"_+$G(SRV)_"^DIV^SYS^PKG","ORWPCE FORCE PCE ENTRY","Q",.ORERR)
 S ORY=+$P($G(ORTMP(1)),U,2)```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The user to check the parameter for.{:/} | 
| {::nomarkdown}LOC{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Location to use in checking the parameter.{:/} | 




 Generated on January 13th 2017, 6:55:29 am