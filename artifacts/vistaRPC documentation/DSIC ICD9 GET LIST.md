---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC ICD9 GET LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC ICD9 GET LIST{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [DSICDRG](http://code.osehra.org/dox/Routine_DSICDRG_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This will return a list of active ICD9 codes for a lookup value.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DSIX{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown} Old method of calling this procedure:    This is the Lexicon lookup value.  New method of calling this procedure:    Under the new method this parameter would be set to NULL.  Please see parameter DSIA details on new call procedure.{:/} | 
| {::nomarkdown}SCR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown} Old method of calling this procedure:    If SCR=\P\, then the matches to the lookup value will be screened    to only return diagnoses which are acceptable as principal diagnoses.  New method of calling this procedure:    Under the new method SCR would be set to NULL.  Please see parameter DSIA for details on new calling procedure.{:/} | 
| {::nomarkdown}DSIA{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown} New method for calling this subroutine:     An input array \DSIA\ will have to be set up in following format:       DSIA(0) = \LOOKUP^Value\            user input lookup value     DSIA(1) = \CHKSCR^Value\            If value set to \P\, only valid ICD9 codes that are eligible            to be principle diagnosis will be returned.     DSIA(2) = \ACTDATE^Value\ (ACTDATE is in Fileman format, NULL dates            will be set to Today) The eligibility date of the ICD9 code.     DSIA(3) = \MAX^Value\ (100 is the default)             The maximum number of diagnosis you want returned.           TOTALS = RR(0)= P1^P2 - Will only be returned for new call                                  method                    P1 = # of codes returned                    P2 = total number of codes considered               Example:                    DSIX - Leave NULL                    SCR  - Leave NULL                    SS(0)=\LOOKUP^137\                    SS(1)=\CHKSCR^P\                    SS(2)=\ACTDATE^\                    SS(3)=\MAX^N\              D LIST^DSICDRG(.RR,,,.SS)  Return: RR =\^TMP(\DSIC\,5876)\{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:10 am</p>{:/}