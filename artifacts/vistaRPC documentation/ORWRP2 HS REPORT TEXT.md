---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP2 HS REPORT TEXT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP2 HS REPORT TEXT{:/}
 tag | {::nomarkdown}REPORT{:/}
 routine | [ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC is used to build the ADHOC Health Summary from an array ofpre-selected health summary components.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}COMPS{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The input array is defined as:COMPS(i)=array of subcomponents chosen, value is pointer at^GMT(142,DA(1),1,DA)Additional pieces may be present for components that require additionalparameters such as Headers, Time and Occurrance limits, and selected fileentries, such as selected lab tests. COMPS(i)=segment^OccuranceLimit^TimeLimit^Header^segment^file^ifn^zerothnode of file{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | REPORT^[ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 Method comment | Build Report from array of Components passed in COMPS
 Input parameters | {::nomarkdown}ORCOMPS, ORDFN{:/}
 First comment | {::nomarkdown}<pre>RPC => ORWRP2 HS REPORT TEXT<br/>ORCOMPS(i)=array of subcomponents chosen, value is pointer at ^GMT(142,DA(1),1,DA)</pre>{:/}
 Code | {::nomarkdown}  Q:'$G(ORDFN)<br> N GMTSEGC,GMTSEG,ORGMTSEG,ORSEGC,ORSEGI<br> K ^TMP("ORDATA",$J)<br> D REPORT^GMTSADH5(.ORGMTSEG,.ORSEGC,.ORSEGI,.ORCOMPS,.ORDFN)<br> Q:'$O(ORGMTSEG(0))<br> D START^ORWRP(80,"REPORT1^ORWRP2(.ORGMTSEG,.ORSEGC,.ORSEGI,ORDFN)")<br> S OROOT=$NA(^TMP("ORDATA",$J,1)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:04 am</p>{:/}