---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWRP2 HS REPORT TEXT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP2 HS REPORT TEXT{:/}
 tag | {::nomarkdown}REPORT{:/}
 routine | [ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC is used to build the ADHOC Health Summary from an array ofpre-selected health summary components.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}COMPS{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The input array is defined as:COMPS(i)=array of subcomponents chosen, value is pointer at^GMT(142,DA(1),1,DA)Additional pieces may be present for components that require additionalparameters such as Headers, Time and Occurrance limits, and selected fileentries, such as selected lab tests. COMPS(i)=segment^OccuranceLimit^TimeLimit^Header^segment^file^ifn^zerothnode of file{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | REPORT^[ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 Method comment | Build Report from array of Components passed in COMPS
 First comment | {::nomarkdown}RPC => ORWRP2 HS REPORT TEXT<br/>ORCOMPS(i)=array of subcomponents chosen, value is pointer at ^GMT(142,DA(1),1,DA){:/}
 Input parameters | {::nomarkdown}ORCOMPS<br/>ORDFN{:/}
 Code | ```  Q:'$G(ORDFN)
 N GMTSEGC,GMTSEG,ORGMTSEG,ORSEGC,ORSEGI
 K ^TMP("ORDATA",$J)
 D REPORT^GMTSADH5(.ORGMTSEG,.ORSEGC,.ORSEGI,.ORCOMPS,.ORDFN)
 Q:'$O(ORGMTSEG(0))
 D START^ORWRP(80,"REPORT1^ORWRP2(.ORGMTSEG,.ORSEGC,.ORSEGI,ORDFN)")
 S OROOT=$NA(^TMP("ORDATA",$J,1))```




 Generated on January 14th 2017, 7:26:35 am