---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF INP NON-VA HOSP ACTIVITY 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIF INP NON-VA HOSP ACTIVITY{:/}
 tag | {::nomarkdown}START{:/}
 routine | [DSIFRPT1](http://code.osehra.org/dox/Routine_DSIFRPT1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This is an RPC version of the NON-VA HOSPITAL ACTIVITY report.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FBENDDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Last Day of the Month for the report (Required, FileMan format){:/} | 
| {::nomarkdown}FBK{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Report Hospital Type (Required, 1 = Public Hospital, 2 = Private Hospital, 3 = Federal Hospital){:/} | 




 Generated on January 13th 2017, 6:15:57 am