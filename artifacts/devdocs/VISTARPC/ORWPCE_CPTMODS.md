---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPCE CPTMODS<br/>
# ORWPCE CPTMODS

Returns a list of CPT Modifiers for a given CPT Code.

## Properties

Property | Value
--- | ---
Label | CPTMODS
MUMPS Implementation | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ORCPTCOD | LITERAL |  | true | CPT Code



## MUMPS Method Description

Property | Value
--- | ---
Method | [CPTMODS^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Method Comment | Return CPT Modifiers for a CPT Code
Input Parameters | ORCPTCOD, ORDATE
Code | {::nomarkdown}<pre><code> N ORM,ORIDX,ORI,MODNAME<br/> S:'+$G(ORDATE) ORDATE=DT<br/> I +($$CODM^ICPTCOD(ORCPTCOD,$NA(ORM),0,ORDATE)),+$D(ORM) D<br/> . S ORIDX="",ORI=0<br/> . F  S ORIDX=$O(ORM(ORIDX)) Q:(ORIDX="")  D<br/> . . S ORI=ORI+1,MODNAME=$P(ORM(ORIDX),U,1)<br/> . . S LST(MODNAME_ORI)=$P(ORM(ORIDX),U,2)_U_MODNAME_U_ORIDX</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}