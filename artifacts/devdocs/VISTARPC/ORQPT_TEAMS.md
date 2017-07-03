---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQPT TEAMS
# ORQPT TEAMS

Function returns a list of teams.

Property | Value
--- | ---
Label | TEAMS
Routine | [ORQPTQ1](http://code.osehra.org/dox/Routine_ORQPTQ1_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [TEAMS^ORQPTQ1](http://code.osehra.org/dox/Routine_ORQPTQ1_source.html)
Method Comment | return list of teams for a system
First Comment | {::nomarkdown}<pre><code> Also called under DBIA # 2692.</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ORTM,I,ORTMN<br/> S ORTMN="",I=1<br/> F  S ORTMN=$O(^OR(100.21,"B",ORTMN)) Q:ORTMN=""  D<br/> .S ORTM="",ORTM=$O(^OR(100.21,"B",ORTMN,ORTM)) Q:ORTM=""<br/> .I $P($G(^OR(100.21,ORTM,11)),U)'=0!($D(^OR(100.21,ORTM,1,$G(DUZ,0)))) S ORY(I)=ORTM_U_ORTMN,I=I+1<br/> S:+$G(ORY(1))<1 ORY(1)="^No teams found."</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}