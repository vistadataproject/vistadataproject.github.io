---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OOPS SELECT CA7<br/>
# OOPS SELECT CA7

This broker call returns a list of valid Request for Compensation claims (CA-7)for the employee or Workers' Comp Specialist.

## Properties

Property | Value
--- | ---
Label | CA7LIST
MUMPS Implementation | [OOPSGUIC](http://code.osehra.org/dox/Routine_OOPSGUIC_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PERSON | LITERAL | 40 | true | This parameter contains either the employee&#x27;s name or employee&#x27;s socialsecurity number.  Using this parameter a list of all the CA-7&#x27;s for thisindividual will be returned. 
CALL | LITERAL | 20 | true | This parameter contains the file number and the menu that called this brokercall.  The menu the broker is called from helps determine which cases canbe returned in the list.  If from the employee menu, then only cases for thatemployee are included, if from the WC menu, then all the CA-7&#x27;s for the personwhose name is passed in.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}