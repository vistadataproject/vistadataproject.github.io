---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE SCSEL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE SCSEL{:/}
 tag | {::nomarkdown}SCSEL{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns a list of service connected conditions that may be selected.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SCSEL^[ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 Method comment | return SC conditions that may be selected
 Input parameters | {::nomarkdown}DFN, ATM, LOC, VST{:/}
 First comment | {::nomarkdown}<pre> VAL=SCallow^SCdflt;AOallow^AOdflt;IRallow^IRdflt;ECallow^ECdflt;<br/>     MSTallow^MSTdflt;HNCallow^HNCdflt;CVAllow^CVDflt;SHADAllow^SHADDflt</pre>{:/}
 Code | {::nomarkdown}  N ORX,S S S=";"<br> D SCCOND^PXUTLSCC(DFN,ATM,LOC,$G(VST),.ORX)<br> S VAL=$G(ORX("SC"))_S_$G(ORX("AO"))_S_$G(ORX("IR"))_S_$G(ORX("EC"))_S_$G(ORX("MST"))_S_$G(ORX("HNC"))_S_$G(ORX("CV"))_S_$G(ORX("SHAD")){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:08 am</p>{:/}