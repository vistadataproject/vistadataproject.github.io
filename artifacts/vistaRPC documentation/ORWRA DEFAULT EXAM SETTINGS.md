---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRA DEFAULT EXAM SETTINGS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWRA DEFAULT EXAM SETTINGS{:/}
 tag | {::nomarkdown}GETDEF{:/}
 routine | [ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC returns the default settings for the display of imaging exams onthe reports tab. {:/}


### Method description

 property | value 
 --- | --- 
 Method comment | get default context settings for LM imaging reports
 Lines | {::nomarkdown} N BEG,CONTEXT,END,MAX<br/> S CONTEXT=$$GET^XPAR("ALL","ORCH CONTEXT REPORTS")<br/> S BEG=$$DT^ORCHTAB1($P(CONTEXT,";"))<br/> S END=$$DT^ORCHTAB1($P(CONTEXT,";",2))<br/> S MAX=$P(CONTEXT,";",5)<br/> D OP^XQCHK<br/> I $P($G(XQOPT),"^",1)="DVBA CAPRI GUI" D<br/> .S BEG=$$DT^ORCHTAB1("T-36500")<br/> .S END=$$DT^ORCHTAB1("T")<br/> .S MAX="9999"<br/> S Y=BEG_"^"_END_"^"_MAX{:/}




 Generated on January 13th 2017, 7:15:27 am