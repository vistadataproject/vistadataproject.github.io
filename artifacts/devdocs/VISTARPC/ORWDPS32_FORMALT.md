---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDPS32 FORMALT<br/>
# ORWDPS32 FORMALT

Return a list of formulary alternatives.

## Properties

Property | Value
--- | ---
Label | FORMALT
Routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [FORMALT^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
Method Comment | return a list of formulary alternatives
Input Parameters | IEN, PSTYPE
Code | {::nomarkdown}<pre><code> D ENRFA^PSJORUTL(IEN,PSTYPE,.ORLST)<br/> S I=0 F  S I=$O(ORLST(I)) Q:'I  D<br/> . S OI=+$O(^ORD(101.43,"ID",+$P(ORLST(I),U,4)_";99PSP",0))<br/> . S $P(ORLST(I),U,4)=OI I OI S $P(ORLST(I),U,5)=$P(^ORD(101.43,OI,0),U)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}