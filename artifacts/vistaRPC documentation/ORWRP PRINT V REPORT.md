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
 Lines | {::nomarkdown} N ZTDTH,ZTRTN,ZTSK,ZTDESC,ZTSAVE,I,ORHSTAG<br/> S ZTIO=ORIO,ZTDTH=$H<br/> S ZTDESC="Remote V Report Print"<br/> S ZTRTN="GETVTYPE^ORWRPP1"<br/> F I="ORDFN","ORHEAD","ORRPT(" S ZTSAVE(I)=""<br/> D ^%ZTLOAD<br/> I $D(ZTSK) D<br/> . S ORY="0^Report queued. (Task #"_ZTSK_")"<br/> E  D<br/> . S ORY="99^Task Rejected."{:/}
 Leading comment lines | {::nomarkdown}RPC: ORWRP PRINT V REPORT{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORIO{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}HEADER{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}REPORT{:/} | {::nomarkdown}WORD PROCESSING{:/} |  |  |  | 




 Generated on January 13th 2017, 7:15:28 am