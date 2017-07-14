---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPT ENCTITL<br/>
# ORWPT ENCTITL

Returns external values to display for encounter in format:     LOCNAME^LOCABBR^ROOMBED^PROVNAME

## Properties

Property | Value
--- | ---
Label | ENCTITL
Routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [ENCTITL^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Method Comment | Return external values for encounter
Input Parameters | DFN, LOC, PROV
First Comment | {::nomarkdown}<pre><code> LOCNAME^LOCABBR^ROOMBED^PROVNAME</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S $P(REC,U,1)=$P($G(^SC(+LOC,0)),U,1,2)<br/> S $P(REC,U,3)=$P($G(^DPT(DFN,.101)),U)<br/> S $P(REC,U,4)=$P($G(^VA(200,+PROV,0)),U)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}