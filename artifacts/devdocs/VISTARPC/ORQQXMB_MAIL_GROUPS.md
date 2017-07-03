---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQXMB MAIL GROUPS
# ORQQXMB MAIL GROUPS

Returns mail groups in a system.

Property | Value
--- | ---
Label | MAILG
Routine | [ORQQXQA](http://code.osehra.org/dox/Routine_ORQQXQA_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [MAILG^ORQQXQA](http://code.osehra.org/dox/Routine_ORQQXQA_source.html)
Method Comment | return mail groups in a system
Code | {::nomarkdown}<pre><code> N ORI S ORI=1<br/> D LIST^DIC(3.8,"","","","","","","","","","ORBMG($J)")<br/> F ORI=1:1:$P(ORBMG($J,"DILIST",0),U) S ORY(ORI)=ORBMG($J,"DILIST",2,ORI)_U_ORBMG($J,"DILIST",1,ORI)<br/> D CLEAN^DILF<br/> K ORBMG<br/></code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}