---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP PRINT V REPORT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP PRINT V REPORT{:/}
 tag | {::nomarkdown}PRINTV{:/}
 routine | [ORWRPP1](http://code.osehra.org/dox/Routine_ORWRPP1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This rpc is used to print a V type report on the Reports tab in CPRS{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Print data for remote sites
 Input Parameters | {::nomarkdown}ORIO<br/>ORDFN<br/>ORHEAD<br/>ORRPT{:/}
 Lines | ```
 N ZTDTH,ZTRTN,ZTSK,ZTDESC,ZTSAVE,I,ORHSTAG
 S ZTIO=ORIO,ZTDTH=$H
 S ZTDESC="Remote V Report Print"
 S ZTRTN="GETVTYPE^ORWRPP1"
 F I="ORDFN","ORHEAD","ORRPT(" S ZTSAVE(I)=""
 D ^%ZTLOAD
 I $D(ZTSK) D
 . S ORY="0^Report queued. (Task #"_ZTSK_")"
 E  D
 . S ORY="99^Task Rejected."```
 Leading comment lines | {::nomarkdown}RPC: ORWRP PRINT V REPORT{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORIO{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}HEADER{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}REPORT{:/} | {::nomarkdown}WORD PROCESSING{:/} |  |  |  | 




 Generated on January 13th 2017, 6:55:29 am