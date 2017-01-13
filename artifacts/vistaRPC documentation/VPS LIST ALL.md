---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VPS LIST ALL 

 property | value 
--- | --- 
 label | {::nomarkdown}VPS LIST ALL{:/}
 tag | {::nomarkdown}LISTALL{:/}
 routine | [VPSRPC5](http://code.osehra.org/dox/Routine_VPSRPC5_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of patients with names start with (** NOT PREFIXED BY **) the input value. Only 44 records will be returned to the caller. e.q: If Patient File contains patient names 'AA', 'AB', 'BB', 'BC, 'CC', 'CD'in this order and caller passes in 'A', all of those patients will beincluded in the list.If 'GG', 'KK', 'LL' are the 44th, 45th, and 46th patients in the patient name order, 'KK' and 'LL' will not be included. To get the next patients, caller must request the next batch of 44 records. For this reason, this RPC accepts two different format of'LIST FROM' text: 1. FROM = PATIENT NAME. This format will return records start with (** NOT PREFIXED BY **) FROM (PATIENT NAME) 2. FROM = LAST IEN^LAST PATIENT NAME. This format with return the next batch of 44 records after the LAST PATIENT NAME.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FROM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the patient's name or contains the patient's file #2 IEN andname. Name part of the input may be a partial or full name.  Examples:  \DOE,J\  OR \99999^DOE,J\.{:/} | 
| {::nomarkdown}DIR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of DIR can be 1 or -1.  This parameter determines the $ORDER search direction, 1 is ascending and -1 is descending.{:/} | 
| {::nomarkdown}FROM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}FORM is the 'Start With' or 'List From' input parametr. This is **NOT** a 'Prefixed by' input parameter.This is a required field and can have two different formats. 1. FORM  = PATIENT NAME. This format will return a batch of 44 patient records in patient name order start with PATIENT NAME. This is *NOT* a 'Prefixed by' input parameter. Any records in that batch including patient names *not* prefixed by the FORM will be included. 2. FORM = LAST IEN^LAST PATIENT NAME. This format is to provide a caller to get the next batch of 44 records. The list returned will NOT include the LAST PATIENT NAME. Commonly, RPC caller will set LAST IEN^LAST PATIENT NAME with the last record returned in the previous RPC call.{:/} | 
| {::nomarkdown}DIR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Input parameter DIR determines the order of the output array returned. Thevalue is either 1 (ascending order = default value) or -1 (descending order).{:/} | 




 Generated on January 13th 2017, 6:15:57 am