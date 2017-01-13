---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DVBAD CONTRACTED EXAM CRYPTO 

 property | value 
--- | --- 
 label | {::nomarkdown}DVBAD CONTRACTED EXAM CRYPTO{:/}
 tag | {::nomarkdown}EN{:/}
 routine | [DVBACEM1](http://code.osehra.org/dox/Routine_DVBACEM1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Allows the demTRAN (GUI) application to Encrypt/Decrypt information for storage to or retrieval from the VistA environment.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DVBAETYP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The type of cryptography action to execute: 1: Encryption or 2: Decryption.{:/} | 
| {::nomarkdown}DVBAIVAL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}999{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The single or '^' delimited string value(s) to perform the cryptography action on.{:/} | 




 Generated on January 13th 2017, 6:55:29 am