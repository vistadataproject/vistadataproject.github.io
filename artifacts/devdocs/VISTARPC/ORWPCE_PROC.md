---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPCE PROC<br/>
# ORWPCE PROC

Returns a list of procedures for a clinic location.

## Properties

Property | Value
--- | ---
Label | PROC
MUMPS Implementation | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [PROC^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Method Comment | get list of procedures for clinic P12 for CPTMods
Input Parameters | CLINIC, ORDATE
Code | {::nomarkdown}<pre><code> S:'+$G(ORDATE) ORDATE=DT<br/> D GETLST^IBDF18A(CLINIC,"DG SELECT CPT PROCEDURE CODES","LST",,,1,ORDATE)<br/> N IDX,MOD,CODES,FIRST S IDX=0<br/> F  S IDX=$O(LST(IDX)) Q:'+IDX  D<br/> . I LST(IDX)="" K LST(IDX) Q<br/> . S MOD=0,CODES="",FIRST=1<br/> . F  S MOD=$O(LST(IDX,"MODIFIER",MOD)) Q:(MOD="")  D<br/> . . I FIRST S FIRST=0<br/> . . E  S CODES=CODES_";"<br/> . . S CODES=CODES_LST(IDX,"MODIFIER",MOD)<br/> . K LST(IDX,"MODIFIER")<br/> . I 'FIRST S $P(LST(IDX),U,12)=CODES</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}