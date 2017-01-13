---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG3 TIU NEW 

 property | value 
--- | --- 
 label | {::nomarkdown}MAG3 TIU NEW{:/}
 tag | {::nomarkdown}NEW{:/}
 routine | [MAGGNTI1](http://code.osehra.org/dox/Routine_MAGGNTI1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}RPC Call to create a New Note   and Optionally :             Electronically Sign the Note.           Administratively Close the Note.           Add Text to the Note.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGDFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DFN of the Patient.{:/} | 
| {::nomarkdown}MAGTITLE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}IEN of TIU DOCUMENT DEFINITION entry in file ^TIU(8925.1{:/} | 
| {::nomarkdown}MAGADCL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}  1 = Mark this Note as Administratively Closed  otherwise it will be Un-Signed{:/} | 
| {::nomarkdown}MAGMODE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Mode of Admin Closure: \S\ = Scanned Document \M\ = Manual closure{:/} | 
| {::nomarkdown}MAGES{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown} The encrypted Electronic Signature{:/} | 
| {::nomarkdown}MAGESBY{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}90{:/} | {::nomarkdown}true{:/} | {::nomarkdown} The DUZ of the Signer (Defaults to DUZ){:/} | 
| {::nomarkdown}MAGLOC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}IEN in Hospital Location File #44, Global ^SC({:/} | 
| {::nomarkdown}MAGTEXT{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}3200{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Array of Text to add to the New Note.{:/} | 
| {::nomarkdown}MAGDATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}40{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Date of the Note. For New Notes.{:/} | 
| {::nomarkdown}MAGCNSLT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DA of Consult to Link this note to.{:/} | 




 Generated on January 13th 2017, 7:11:27 am