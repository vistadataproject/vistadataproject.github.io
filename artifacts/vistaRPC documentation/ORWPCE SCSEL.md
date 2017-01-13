---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE SCSEL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE SCSEL{:/}
 tag | {::nomarkdown}SCSEL{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns a list of service connected conditions that may be selected.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return SC conditions that may be selected
 Input Parameters | {::nomarkdown}DFN<br/>ATM<br/>LOC<br/>VST{:/}
 Lines | ```{::nomarkdown} N ORX,S S S=";"<br/> D SCCOND^PXUTLSCC(DFN,ATM,LOC,$G(VST),.ORX)<br/> S VAL=$G(ORX("SC"))_S_$G(ORX("AO"))_S_$G(ORX("IR"))_S_$G(ORX("EC"))_S_$G(ORX("MST"))_S_$G(ORX("HNC"))_S_$G(ORX("CV"))_S_$G(ORX("SHAD"))```{:/}
 Leading comment lines | {::nomarkdown}VAL=SCallow^SCdflt;AOallow^AOdflt;IRallow^IRdflt;ECallow^ECdflt;<br/>MSTallow^MSTdflt;HNCallow^HNCdflt;CVAllow^CVDflt;SHADAllow^SHADDflt{:/}




 Generated on January 13th 2017, 7:11:26 am