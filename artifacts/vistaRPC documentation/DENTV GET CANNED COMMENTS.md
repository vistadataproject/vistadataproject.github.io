---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; DENTV GET CANNED COMMENTS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}DENTV GET CANNED COMMENTS{:/}
 tag | {::nomarkdown}GET{:/}
 routine | [DENTVCC](http://code.osehra.org/dox/Routine_DENTVCC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the canned comments by provider, system, or both. The maximum number returned is 12. This limit is set by the GUI.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PROV{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Provider IEN.{:/} | 
| {::nomarkdown}TYP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Type returns either S-system,U-user/provider,A-Both.{:/} | 
| {::nomarkdown}CAT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Category of the canned statements.1-Radiographic Findings2-Summary Assessment3-Treatment Plan4-Patient Education5-Disposition{:/} | 




 Generated on January 14th 2017, 7:26:36 am