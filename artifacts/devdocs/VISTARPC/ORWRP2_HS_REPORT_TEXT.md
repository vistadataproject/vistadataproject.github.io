---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWRP2 HS REPORT TEXT
# ORWRP2 HS REPORT TEXT

This RPC is used to build the ADHOC Health Summary from an array ofpre-selected health summary components.

Property | Value
--- | ---
Label | REPORT
Routine | [ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
COMPS | LIST |  | true | The input array is defined as:COMPS(i)&#x3D;array of subcomponents chosen, value is pointer at^GMT(142,DA(1),1,DA)Additional pieces may be present for components that require additionalparameters such as Headers, Time and Occurrance limits, and selected fileentries, such as selected lab tests. COMPS(i)&#x3D;segment^OccuranceLimit^TimeLimit^Header^segment^file^ifn^zerothnode of file



### MUMPS Method Description

Property | Value
--- | ---
Method | [REPORT^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
Method Comment | Build Report from array of Components passed in COMPS
Input Parameters | ORCOMPS, ORDFN
First Comment | {::nomarkdown}<pre><code>RPC => ORWRP2 HS REPORT TEXT<br/>ORCOMPS(i)=array of subcomponents chosen, value is pointer at ^GMT(142,DA(1),1,DA)</code></pre>{:/}
Code | {::nomarkdown}<pre><code> Q:'$G(ORDFN)<br/> N GMTSEGC,GMTSEG,ORGMTSEG,ORSEGC,ORSEGI<br/> K ^TMP("ORDATA",$J)<br/> D REPORT^GMTSADH5(.ORGMTSEG,.ORSEGC,.ORSEGI,.ORCOMPS,.ORDFN)<br/> Q:'$O(ORGMTSEG(0))<br/> D START^ORWRP(80,"REPORT1^ORWRP2(.ORGMTSEG,.ORSEGC,.ORSEGI,ORDFN)")<br/> S OROOT=$NA(^TMP("ORDATA",$J,1))</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}