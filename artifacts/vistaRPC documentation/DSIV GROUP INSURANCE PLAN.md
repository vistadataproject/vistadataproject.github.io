---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; DSIV GROUP INSURANCE PLAN 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIV GROUP INSURANCE PLAN{:/}
 tag | {::nomarkdown}GRPPOL{:/}
 routine | [DSIVIC](http://code.osehra.org/dox/Routine_DSIVIC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Looks up Group Insurance Plan name and returns match or matchesor error message.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}NAME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Group Insurance Plan name to match.{:/} | 
| {::nomarkdown}FIELDS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}245{:/} |  | {::nomarkdown}Field list to return in standard FileMan format.  Defaults to     \@;.03;.01I;.01\{:/} | 
| {::nomarkdown}VDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} |  | {::nomarkdown}Visit Date.Time for policy limitations (coverage) data.Defaults to TODAY.{:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}