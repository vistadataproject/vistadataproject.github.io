---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPCE SCSEL<br/>
# ORWPCE SCSEL

Returns a list of service connected conditions that may be selected.

## Properties

Property | Value
--- | ---
Label | SCSEL
MUMPS Implementation | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [SCSEL^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Method Comment | return SC conditions that may be selected
Input Parameters | DFN, ATM, LOC, VST
First Comment | {::nomarkdown}<pre><code> VAL=SCallow^SCdflt;AOallow^AOdflt;IRallow^IRdflt;ECallow^ECdflt;<br/>     MSTallow^MSTdflt;HNCallow^HNCdflt;CVAllow^CVDflt;SHADAllow^SHADDflt</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ORX,S S S=";"<br/> D SCCOND^PXUTLSCC(DFN,ATM,LOC,$G(VST),.ORX)<br/> S VAL=$G(ORX("SC"))_S_$G(ORX("AO"))_S_$G(ORX("IR"))_S_$G(ORX("EC"))_S_$G(ORX("MST"))_S_$G(ORX("HNC"))_S_$G(ORX("CV"))_S_$G(ORX("SHAD"))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}