'use client';

import { motion } from 'framer-motion';

export default function AnimatedGears() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-60 pointer-events-none z-0">
      {/* Large Red Gear */}
      <motion.div
        className="absolute top-10 left-10 w-70 h-70"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
          <defs>
            <radialGradient id="gear1" cx="30%" cy="25%" r="70%">
              <stop offset="0%" stopColor="#fecaca" />
              <stop offset="20%" stopColor="#fca5a5" />
              <stop offset="40%" stopColor="#f87171" />
              <stop offset="70%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#dc2626" />
            </radialGradient>
            <filter id="shadow1">
              <feDropShadow dx="4" dy="8" stdDeviation="6" floodColor="rgba(0,0,0,0.4)"/>
            </filter>
          </defs>
          {/* Outer gear ring */}
          <circle cx="50" cy="50" r="40" fill="url(#gear1)" stroke="#b91c1c" strokeWidth="2" filter="url(#shadow1)"/>
          {/* Rectangular gear teeth extending outward */}
          {Array.from({length: 12}).map((_, i) => {
            const angle = (i * 30) * Math.PI / 180;
            const innerX = 50 + 40 * Math.cos(angle);
            const innerY = 50 + 40 * Math.sin(angle);
            return (
              <rect key={i} x={innerX-2} y={innerY-4} width="4" height="8" fill="#dc2626" stroke="#991b1b" strokeWidth="1"
                    transform={`rotate(${i * 30 + 90} ${innerX} ${innerY})`}/>
            );
          })}
          {/* Inner ring */}
          <circle cx="50" cy="50" r="25" fill="#b91c1c" stroke="#7f1d1d" strokeWidth="2"/>
          <circle cx="50" cy="50" r="20" fill="none" stroke="#fca5a5" strokeWidth="1" opacity="0.7"/>
          {/* Center hole */}
          <circle cx="50" cy="50" r="8" fill="#1f2937" stroke="#374151" strokeWidth="2"/>
          <circle cx="47" cy="47" r="5" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
          {/* 3D highlight */}
          <path d="M30,30 Q35,25 60,30 Q65,35 65,50 Q60,45 50,40 Q40,35 30,30" fill="rgba(255,255,255,0.3)" opacity="0.8"/>
        </svg>
      </motion.div>

      {/* Medium Blue Gear */}
      <motion.div
        className="absolute top-1/4 right-10 w-60 h-60"
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl">
          <defs>
            <radialGradient id="gear2" cx="30%" cy="25%" r="70%">
              <stop offset="0%" stopColor="#dbeafe" />
              <stop offset="20%" stopColor="#bfdbfe" />
              <stop offset="40%" stopColor="#93c5fd" />
              <stop offset="70%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </radialGradient>
            <filter id="shadow2">
              <feDropShadow dx="3" dy="6" stdDeviation="5" floodColor="rgba(0,0,0,0.3)"/>
            </filter>
          </defs>
          {/* Outer gear ring */}
          <circle cx="50" cy="50" r="38" fill="url(#gear2)" stroke="#1e40af" strokeWidth="2" filter="url(#shadow2)"/>
          {/* Rectangular gear teeth extending outward */}
          {Array.from({length: 10}).map((_, i) => {
            const angle = (i * 36) * Math.PI / 180;
            const innerX = 50 + 38 * Math.cos(angle);
            const innerY = 50 + 38 * Math.sin(angle);
            return (
              <rect key={i} x={innerX-2} y={innerY-4} width="4" height="8" fill="#1d4ed8" stroke="#1e3a8a" strokeWidth="1"
                    transform={`rotate(${i * 36 + 90} ${innerX} ${innerY})`}/>
            );
          })}
          {/* Inner ring */}
          <circle cx="50" cy="50" r="23" fill="#1e40af" stroke="#1e3a8a" strokeWidth="2"/>
          <circle cx="50" cy="50" r="18" fill="none" stroke="#93c5fd" strokeWidth="1" opacity="0.6"/>
          {/* Center hole */}
          <circle cx="50" cy="50" r="7" fill="#1f2937" stroke="#374151" strokeWidth="2"/>
          <circle cx="47" cy="47" r="4" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
          {/* 3D highlight */}
          <path d="M30,30 Q35,25 60,30 Q65,35 65,50 Q60,45 50,40 Q40,35 30,30" fill="rgba(255,255,255,0.25)" opacity="0.7"/>
        </svg>
      </motion.div>

      {/* Small Golden Gear */}
      <motion.div
        className="absolute bottom-10 left-1/3 w-50 h-50"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
          <defs>
            <radialGradient id="gear3" cx="30%" cy="25%" r="70%">
              <stop offset="0%" stopColor="#fef3c7" />
              <stop offset="20%" stopColor="#fde047" />
              <stop offset="40%" stopColor="#facc15" />
              <stop offset="70%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#ca8a04" />
            </radialGradient>
            <filter id="shadow3">
              <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="rgba(0,0,0,0.3)"/>
            </filter>
          </defs>
          {/* Outer gear ring */}
          <circle cx="50" cy="50" r="36" fill="url(#gear3)" stroke="#a16207" strokeWidth="2" filter="url(#shadow3)"/>
          {/* Rectangular gear teeth extending outward */}
          {Array.from({length: 8}).map((_, i) => {
            const angle = (i * 45) * Math.PI / 180;
            const innerX = 50 + 36 * Math.cos(angle);
            const innerY = 50 + 36 * Math.sin(angle);
            return (
              <rect key={i} x={innerX-2} y={innerY-4} width="4" height="8" fill="#ca8a04" stroke="#92400e" strokeWidth="1"
                    transform={`rotate(${i * 45 + 90} ${innerX} ${innerY})`}/>
            );
          })}
          {/* Inner ring */}
          <circle cx="50" cy="50" r="21" fill="#a16207" stroke="#78350f" strokeWidth="2"/>
          <circle cx="50" cy="50" r="16" fill="none" stroke="#fde047" strokeWidth="1" opacity="0.7"/>
          {/* Center hole */}
          <circle cx="50" cy="50" r="6" fill="#1f2937" stroke="#374151" strokeWidth="2"/>
          <circle cx="47" cy="47" r="3" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
          {/* 3D highlight */}
          <path d="M32,32 Q37,27 58,32 Q63,37 63,50 Q58,45 48,40 Q38,35 32,32" fill="rgba(255,255,255,0.35)" opacity="0.8"/>
        </svg>
      </motion.div>

      {/* Purple Gear */}
      <motion.div
        className="absolute top-32 right-1/3 w-45 h-45"
        animate={{ rotate: -360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          <defs>
            <radialGradient id="gear4" cx="30%" cy="25%" r="70%">
              <stop offset="0%" stopColor="#e9d5ff" />
              <stop offset="20%" stopColor="#c4b5fd" />
              <stop offset="40%" stopColor="#a78bfa" />
              <stop offset="70%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#7c3aed" />
            </radialGradient>
            <filter id="shadow4">
              <feDropShadow dx="2" dy="3" stdDeviation="2" floodColor="rgba(0,0,0,0.25)"/>
            </filter>
          </defs>
          {/* Outer gear ring */}
          <circle cx="50" cy="50" r="34" fill="url(#gear4)" stroke="#6d28d9" strokeWidth="2" filter="url(#shadow4)"/>
          {/* Rectangular gear teeth extending outward */}
          {Array.from({length: 6}).map((_, i) => {
            const angle = (i * 60) * Math.PI / 180;
            const innerX = 50 + 34 * Math.cos(angle);
            const innerY = 50 + 34 * Math.sin(angle);
            return (
              <rect key={i} x={innerX-2} y={innerY-4} width="4" height="8" fill="#7c3aed" stroke="#5b21b6" strokeWidth="1"
                    transform={`rotate(${i * 60 + 90} ${innerX} ${innerY})`}/>
            );
          })}
          {/* Inner ring */}
          <circle cx="50" cy="50" r="19" fill="#6d28d9" stroke="#5b21b6" strokeWidth="2"/>
          <circle cx="50" cy="50" r="14" fill="none" stroke="#c4b5fd" strokeWidth="1" opacity="0.6"/>
          {/* Center hole */}
          <circle cx="50" cy="50" r="5" fill="#1f2937" stroke="#374151" strokeWidth="2"/>
          <circle cx="47" cy="47" r="2.5" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
          {/* 3D highlight */}
          <path d="M34,34 Q39,29 56,34 Q61,39 61,50 Q56,45 46,40 Q36,35 34,34" fill="rgba(255,255,255,0.25)" opacity="0.7"/>
        </svg>
      </motion.div>

      {/* Green Gear */}
      <motion.div
        className="absolute bottom-32 right-32 w-55 h-55"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl">
          <defs>
            <radialGradient id="gear5" cx="30%" cy="25%" r="70%">
              <stop offset="0%" stopColor="#dcfce7" />
              <stop offset="20%" stopColor="#bbf7d0" />
              <stop offset="40%" stopColor="#86efac" />
              <stop offset="70%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#16a34a" />
            </radialGradient>
            <filter id="shadow5">
              <feDropShadow dx="3" dy="6" stdDeviation="4" floodColor="rgba(0,0,0,0.3)"/>
            </filter>
          </defs>
          {/* Outer gear ring */}
          <circle cx="50" cy="50" r="42" fill="url(#gear5)" stroke="#15803d" strokeWidth="2" filter="url(#shadow5)"/>
          {/* Rectangular gear teeth extending outward */}
          {Array.from({length: 14}).map((_, i) => {
            const angle = (i * 25.7) * Math.PI / 180;
            const innerX = 50 + 42 * Math.cos(angle);
            const innerY = 50 + 42 * Math.sin(angle);
            return (
              <rect key={i} x={innerX-2} y={innerY-4} width="4" height="8" fill="#16a34a" stroke="#14532d" strokeWidth="1"
                    transform={`rotate(${i * 25.7 + 90} ${innerX} ${innerY})`}/>
            );
          })}
          {/* Inner ring */}
          <circle cx="50" cy="50" r="27" fill="#15803d" stroke="#14532d" strokeWidth="2"/>
          <circle cx="50" cy="50" r="22" fill="none" stroke="#86efac" strokeWidth="1" opacity="0.6"/>
          {/* Center hole */}
          <circle cx="50" cy="50" r="9" fill="#1f2937" stroke="#374151" strokeWidth="2"/>
          <circle cx="47" cy="47" r="6" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
          {/* 3D highlight */}
          <path d="M28,28 Q35,20 62,28 Q70,35 70,50 Q66,46 58,42 Q50,38 42,42 Q35,38 28,28" fill="rgba(255,255,255,0.25)" opacity="0.7"/>
        </svg>
      </motion.div>
    </div>
  );
}