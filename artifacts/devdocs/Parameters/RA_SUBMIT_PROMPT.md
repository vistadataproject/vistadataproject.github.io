---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; RA SUBMIT PROMPT<br/>
# RA SUBMIT PROMPT

DESCRIPTION:   This is a Radiology/Nuclear Medicine division parametercontrolling whether the ordering clinician is prompted for an ImagingLocation via the &#x27;SUBMIT REQUEST TO&#x27; prompt  (1 &#x3D; user should be prompted,0 &#x3D; user should not be prompted).  The Imaging Location entered determineswhere the Imaging Request form will print (IRM can assign each ImagingLocation in the Radiology/Nuclear Medicine package a request printer).  Ifthis parameter is set to 0, the Imaging Request form will not be printed.If this parameter is set to 1, the system will first attempt toautomatically determine the Imaging Location, then prompt the user if theautomatic attempt fails. If there is more than one Imaging Location for the current imaging type(examples of imaging types selectable when ordering imaging procedures areNuclear Med, Ultrasound, General Radiology, etc.) the automatic attemptwill fail and the prompt will appear. If there is only one possibleImaging Location for the current imaging type, the system willautomatically default to that location. This parameter may be setdifferently for each division within a multi-divisional facility.

## Properties

Property | Value
--- | ---
Summary | Display Submit Prompt
Value Type | yes
Value Domain | 
Multiple Instances | false

## Allowable Entities

Precedence | Entity
--- | ---
1 | DIVISION
2 | SYSTEM
3 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:40 pm</p>{:/}