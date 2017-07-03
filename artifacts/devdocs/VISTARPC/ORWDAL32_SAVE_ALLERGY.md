---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDAL32 SAVE ALLERGY
# ORWDAL32 SAVE ALLERGY



Property | Value
--- | ---
Label | EDITSAVE
Routine | [ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [EDITSAVE^ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
Method Comment | Save Edit/Add of an allergy/adverse reaction
Input Parameters | ORALIEN, ORDFN, OREDITED
First Comment | {::nomarkdown}<pre><code>following patch check is made via GUI RPC call to ORWU PATCH instead<br/>I '$$PATCH^XPDUTL("GMRA*4.0*21") S Y="-1^Not yet implemented" Q</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ORNODE<br/> S ORNODE=$NAME(^TMP("GMRA",$J))<br/> K @ORNODE M @ORNODE=OREDITED<br/> S ORY=0<br/> I $G(@ORNODE@("GMRAERR"))="YES" D EIE^GMRAGUI1(ORALIEN,ORDFN,ORNODE) Q  ;Handle entered in error<br/> I $G(@ORNODE@("GMRANKA"))="YES" D NKA^GMRAGUI1 Q<br/> D UPDATE^GMRAGUI1(ORALIEN,ORDFN,ORNODE) Q  ;Add/edit reactions</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODAllergy.pas">Orders/rODAllergy.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}