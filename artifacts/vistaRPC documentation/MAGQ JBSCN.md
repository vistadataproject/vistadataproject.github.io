---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGQ JBSCN 

 property | value 
--- | --- 
 label | {::nomarkdown}MAGQ JBSCN{:/}
 tag | {::nomarkdown}CNP2{:/}
 routine | [MAGQBPG1](http://code.osehra.org/dox/Routine_MAGQBPG1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This function returns the next image file entry to be evaluated by theBP Verifier function.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This value is the initial $Order value applied to the Image file.{:/} | 
| {::nomarkdown}START{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the starting IEN for the BP Verifier session.{:/} | 
| {::nomarkdown}STOP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the ending IEN for the BP Verifier session.{:/} | 
| {::nomarkdown}AUTO{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}When set this will allow the BP Verifier session to terminate automatically.{:/} | 




 Generated on January 13th 2017, 6:55:29 am