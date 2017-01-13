---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQLR SEARCH RANGE INPT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQLR SEARCH RANGE INPT{:/}
 tag | {::nomarkdown}SRIN{:/}
 routine | [ORQQLR](http://code.osehra.org/dox/Routine_ORQQLR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the date search range in number of days (e.g. 2) to begin the search before today. For example, a value of 2 would indicate to limit thesearch between two days and today. Limited to inpatients.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return lab results search date range for an inpatient
 Input Parameters | {::nomarkdown}ORPT{:/}
 Lines | ```
 N DIFF,SDT,EDT,ORSRV,ORLOC
 I +$G(ORPT)>0 D
 .N DFN S DFN=ORPT,VA200="" D OERR^VADPT
 .I +$G(VAIN(4))>0 S ORLOC=+$G(^DIC(42,+$G(VAIN(4)),44))
 .K VA200,VAIN
 S ORSRV=$G(^VA(200,DUZ,5)) I +ORSRV>0 S ORSRV=$P(ORSRV,U)
 S DIFF=$$GET^XPAR("USR^LOC.`"_$G(ORLOC)_"^SRV.`"_+$G(ORSRV)_"^DIV^SYS^PKG","ORQQLR SEARCH RANGE INPT",1,"E")
 S:+$G(DIFF)<1 DIFF=2  ;if no default defined use 2 days
 S ORY=DIFF
```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Identifier from Patient file [#2].{:/} | 




 Generated on January 13th 2017, 6:55:28 am