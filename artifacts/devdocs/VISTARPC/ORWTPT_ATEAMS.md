---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWTPT ATEAMS<br/>
# ORWTPT ATEAMS



## Properties

Property | Value
--- | ---
Label | ATEAMS
Routine | [ORWTPT](http://code.osehra.org/dox/Routine_ORWTPT_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [ATEAMS^ORWTPT](http://code.osehra.org/dox/Routine_ORWTPT_source.html)
Method Comment | RPC
First Comment | {::nomarkdown}<pre><code> all teams available to subscribe to</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N CNT,NAME,NODE,NUM K TEAMS<br/> S CNT=0<br/> S NUM=0 F  S NUM=$O(^OR(100.21,NUM)) Q:NUM<1  S NODE=$G(^(NUM,0)) D<br/> .I $P(NODE,U,6)'="Y" Q<br/> .I $P(NODE,U,2)="P" Q<br/> .S CNT=CNT+1<br/> .S TEAMS(CNT)=NUM_U_NODE ;$P(NODE,U)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Options/rOptions.pas">Options/rOptions.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}