---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWRA DEFAULT EXAM SETTINGS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWRA DEFAULT EXAM SETTINGS{:/}
 tag | {::nomarkdown}GETDEF{:/}
 routine | [ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC returns the default settings for the display of imaging exams onthe reports tab. {:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETDEF^[ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html)
 Method comment | get default context settings for LM imaging reports
 Code | ```  N BEG,CONTEXT,END,MAX
 S CONTEXT=$$GET^XPAR("ALL","ORCH CONTEXT REPORTS")
 S BEG=$$DT^ORCHTAB1($P(CONTEXT,";"))
 S END=$$DT^ORCHTAB1($P(CONTEXT,";",2))
 S MAX=$P(CONTEXT,";",5)
 D OP^XQCHK
 I $P($G(XQOPT),"^",1)="DVBA CAPRI GUI" D
 .S BEG=$$DT^ORCHTAB1("T-36500")
 .S END=$$DT^ORCHTAB1("T")
 .S MAX="9999"
 S Y=BEG_"^"_END_"^"_MAX```




 Generated on January 14th 2017, 7:26:35 am