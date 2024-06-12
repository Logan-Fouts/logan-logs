# Multi-Method NDI Detection Using a Layered Architecture Framework for Optimized Simplicity and Flexibility

**Authors:** Logan Fouts, Henry Pap  
**Supervisor:** Rafael Martins  
**Semester:** VT/HT 2024  
**Subject:** Computer Science  
**Degree:** Bachelor Degree Project  
**Date:** 9/4/2024

## Abstract

This thesis explores a new framework using a layered architecture to combine near-duplicate image (NDI) detection algorithms, aiming to balance simplicity and flexibility. The approach allows for easy setup and testing of image processing systems, resulting in high accuracy and efficiency. Experiments show improvements in both detection accuracy and execution time.

## Keywords

Near Duplicate Images, Image Processing, Layered Architecture, Algorithm Integration

## Contents

1. [Introduction](#introduction)
2. [Theoretical Background](#theoretical-background)
3. [Method](#method)
4. [Research Project - Implementation](#research-project---implementation)
5. [Results/Demonstration](#resultsdemonstration)
6. [Analysis](#analysis)
7. [Discussion](#discussion)
8. [Conclusions and Future Work](#conclusions-and-future-work)
9. [References](#references)

## Introduction

The digital world is inundated with media, much of which includes exact or near-duplicate images, consuming valuable storage. This thesis aims to address NDI detection using a multi-method approach within a layered architecture framework, balancing complexity and adaptability.

### Background

With the exponential growth of digital images, efficient management and processing are critical. Existing methods, although effective, often lack flexibility and are highly complex.

### Motivation

A study by Microsoft indicates that a significant portion of data is near-duplicated. Improved NDI detection can lead to better data management, reducing storage costs and enhancing user experience.

### Problem Formulation

Current NDI detection methods struggle with adaptability across varied datasets and definitions. This thesis proposes a flexible, layered architecture framework to address these challenges.

### Research Questions

1. Can a layered architecture provide a flexible and effective way to combine image processing algorithms?
2. How can this framework improve the efficacy and flexibility of NDI detection?

## Theoretical Background

### Combining Approaches

Combining multiple image processing techniques can enhance performance. This thesis proposes a vertical approach to combine algorithms in a layered manner, offering simplicity and flexibility.

### Multi-Layered Architectures

A multi-layered architecture allows for modular, scalable, and maintainable systems. Each layer performs a sub-task, passing results to the next layer, progressively refining the output.

## Method

### Design Science Research Methodology (DSRM)

DSRM involves six steps: problem identification, solution objectives, design and development, demonstration, evaluation, and communication. This structured approach ensures comprehensive research and development.

### Reliability and Validity

Detailed documentation and consistent testing conditions ensure reliability. Clear criteria for NDI and random subset selection help maintain validity.

### Ethical Considerations

Confidentiality, sampling bias, and risk of harm are addressed. User-generated content is used with consent.

## Research Project - Implementation

### Framework Design

The framework is written in Python, structured around classes for flexible integration of various algorithms. It includes initialization parameters, a compatibility layer, a layered architecture, an accuracy calculator, image organization, error handling, and easy expansion.

### Implementation of Existing Algorithms

Selected algorithms include Dhash, Phash, Ahash, SIFT, VGG, and SSIM, each encapsulated in Python classes.

### Permutation Experiments

Permutations of algorithms are tested to find optimal configurations, stored in a `presets.json` file.

### Manual Parameter Tuning

Algorithm parameters are manually adjusted for optimal performance, with results stored in the `presets.json` file.

## Results/Demonstration

### SOCOFing Data Set

Permutations and individual results for SOCOFing dataset are presented, showing performance metrics for different combinations of algorithms.

### California-ND Data Set

Permutations and individual results for the California-ND dataset are presented, showing the efficacy of the combined suite of algorithms.

## Analysis

Comparative analysis highlights the advantages and disadvantages of the vertical approach compared to traditional methods, focusing on accuracy, efficiency, and ease of use.

## Discussion

### Integration of Multi-Method Approach

The layered architecture successfully integrates multiple algorithms, providing a flexible and effective NDI detection system.

### Simplifying Complex Solutions

The framework simplifies the combination of algorithms, making it accessible for various use cases.

## Conclusions and Future Work

The proposed framework demonstrates high accuracy and efficiency in NDI detection. Future work includes exploring additional datasets, optimizing algorithm integration, and addressing scalability for production environments.
