---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU IDENTIFY SURGERY CLASS 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU IDENTIFY SURGERY CLASS{:/}
 tag | {::nomarkdown}SURGCLAS{:/}
 routine | [TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC returns the record number of the class identified by the CLNAMEparameter in the TIU DOCUMENT DEFINITION file (#8925.1).{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | RPC to identify class 
 Input Parameters | {::nomarkdown}CLNAME{:/}
 Lines | ```{::nomarkdown} S CLNAME=$G(CLNAME,"SURGICAL REPORTS")<br/> S Y=$$CLASS^TIUSROI(CLNAME)```{:/}
 Leading comment lines | {::nomarkdown}CLNAME = "SURGICAL REPORTS" or "PROCEDURE REPORTS (NON-O.R.)"{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CLNAME{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the name (ASCII LITERAL) of the Class for which the callingapplication needs an IEN.{:/} | 




 Generated on January 13th 2017, 7:11:27 am