---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP PRINT V REPORT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP PRINT V REPORT{:/}
 tag | {::nomarkdown}PRINTV{:/}
 routine | [ORWRPP1](http://code.osehra.org/dox/Routine_ORWRPP1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This rpc is used to print a V type report on the Reports tab in CPRS{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORIO{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}HEADER{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}REPORT{:/} | {::nomarkdown}WORD PROCESSING{:/} |  |  |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | PRINTV^[ORWRPP1](http://code.osehra.org/dox/Routine_ORWRPP1_source.html)
 Method comment | Print data for remote sites
 Input parameters | {::nomarkdown}ORIO, ORDFN, ORHEAD, ORRPT{:/}
 First comment | {::nomarkdown}<pre>  RPC: ORWRP PRINT V REPORT</pre>{:/}
 Code | {::nomarkdown}  N ZTDTH,ZTRTN,ZTSK,ZTDESC,ZTSAVE,I,ORHSTAG<br> S ZTIO=ORIO,ZTDTH=$H<br> S ZTDESC="Remote V Report Print"<br> S ZTRTN="GETVTYPE^ORWRPP1"<br> F I="ORDFN","ORHEAD","ORRPT(" S ZTSAVE(I)=""<br> D ^%ZTLOAD<br> I $D(ZTSK) D<br> . S ORY="0^Report queued. (Task #"_ZTSK_")"<br> E  D<br> . S ORY="99^Task Rejected."{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}