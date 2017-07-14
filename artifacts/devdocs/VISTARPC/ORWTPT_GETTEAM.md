---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWTPT GETTEAM<br/>
# ORWTPT GETTEAM



## Properties

Property | Value
--- | ---
Label | GETTEAM
Routine | [ORWTPT](http://code.osehra.org/dox/Routine_ORWTPT_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [GETTEAM^ORWTPT](http://code.osehra.org/dox/Routine_ORWTPT_source.html)
Method Comment | RPC
Input Parameters | TEAM
First Comment | {::nomarkdown}<pre><code> returns members of a team</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N CNT,NAME,NUM,USER K USERS<br/> S TEAM=+$G(TEAM),CNT=0<br/> S NUM=0 F  S NUM=$O(^OR(100.21,TEAM,1,NUM)) Q:NUM<1  S USER=+$G(^(NUM,0)) D<br/> .S NAME=$P($G(^VA(200,USER,0)),U)<br/> .I '$L(NAME) Q<br/> .S CNT=CNT+1<br/> .S USERS(CNT)=USER_U_NAME</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Options/rOptions.pas">Options/rOptions.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}