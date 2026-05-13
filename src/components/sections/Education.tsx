'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/Animations';
import { Section, Container } from '@/components/layout/Wrappers';
import { Card, Badge } from '@/components/ui/index';
import { resumeData } from '@/data/resume';

export const EducationSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section id="education">
      <Container>
        <SectionHeader className="mb-12">$ Education & Training</SectionHeader>

        {/* Formal Education */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-primary-accent mb-6">Formal Education</h3>
          <motion.div
            className="space-y-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {resumeData.education.slice(0, 3).map((edu) => (
              <motion.div key={edu.id} variants={item}>
                <Card className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-primary-accent">
                        {edu.degree} in {edu.field}
                      </h4>
                      <p className="text-secondary-text">{edu.institution}</p>
                    </div>
                    <Badge variant="cyan" className="whitespace-nowrap">
                      {edu.year}
                    </Badge>
                  </div>
                  {edu.details && (
                    <div className="mt-3 pt-3 border-t border-primary-accent/20 space-y-1">
                      {edu.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-secondary-text">
                          • {detail}
                        </p>
                      ))}
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Professional Courses */}
        <div>
          <h3 className="text-2xl font-bold text-primary-accent mb-6">Professional Courses & Training</h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              'RHCSA Certification Course - Linux Pathshala',
              'RHCE Certification Course - Linux Pathshala',
              'Database Administration - IT Bangla',
              'DevOps Engineer Master Course',
              'Python PCAP (Cisco Certified Associate Programmer)',
              'Kubernetes (CKA) - KodeKloud / Linux Foundation',
              'Advanced Git & Version Control - Page Cloud Academy',
              'Docker & Container Orchestration Mastery',
              'Terraform & Infrastructure as Code',
              'AWS & Cloud Architecture Fundamentals',
              'Jenkins & CI/CD Pipeline Design',
              'Prometheus & Grafana for Monitoring',
            ].map((course, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="card-base p-4 hover:border-primary-cyan/50"
              >
                <p className="text-sm text-primary-text flex items-start">
                  <span className="text-primary-accent mr-3 font-bold">✓</span>
                  <span>{course}</span>
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Continuous Learning */}
        <motion.div
          className="mt-12 card-base p-6 border-primary-accent/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-lg font-bold text-primary-accent mb-3">$ Continuous Learning</h3>
          <p className="text-secondary-text text-sm leading-relaxed">
            Committed to staying current with the rapidly evolving DevOps landscape. Regularly pursuing advanced certifications, attending tech conferences, and exploring emerging technologies in containerization, orchestration, and infrastructure automation.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
};
